import { zodResolver } from '@hookform/resolvers/zod'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import * as S from './styles'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db, storage } from '../../services/firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { toast } from 'react-toastify'

const createNewContactFormSchema = z.object({
  name: z.string().nonempty('O nome é obrigatório').min(6, 'No minímo 6'),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('Formato de email inválido'),
  contact: z.string().nonempty('O contato é obrigatório'),
})

type CreateNewContactFormData = z.infer<typeof createNewContactFormSchema>

const CreateNewContact: React.FC = () => {
  const contactsCollectionRef = collection(db, 'contacts')
  const [imageUrl, setImageUrl] = useState('')
  const [progress, setProgress] = useState(0)

  const handleUploadImage = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const file = event.target?.files?.[0]
    console.log('file', file)
    if (!file) return

    const storageRef = ref(storage, `/images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      (error) => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setImageUrl(url)
          console.log(progress)
        })
      },
    )
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<CreateNewContactFormData>({
    resolver: zodResolver(createNewContactFormSchema),
  })

  const handleNewContact = async ({
    name,
    email,
    contact,
  }: CreateNewContactFormData) => {
    try {
      const emailQuery = query(
        contactsCollectionRef,
        where('email', '==', email),
      )
      const contactQuery = query(
        contactsCollectionRef,
        where('contact', '==', contact),
      )
      const [emailSnapshot, contactSnapshot] = await Promise.all([
        getDocs(emailQuery),
        getDocs(contactQuery),
      ])

      if (!emailSnapshot.empty) {
        toast.error('Email já cadastrado')
        return
      }

      if (!contactSnapshot.empty) {
        toast.error('Contato já cadastrado')
        return
      }

      const newContact = {
        name,
        email,
        contact,
        imageUrl,
      }
      await addDoc(contactsCollectionRef, newContact)
      reset()
      toast.success('Contato criado')
    } catch (error) {
      console.error(error)
    }
  }

  const email = watch('email')
  const name = watch('name')
  const contact = watch('contact')
  const isSubmitDisabled = !email || !name || !contact || !imageUrl

  useEffect(() => {
    console.log('image', imageUrl)
  }, [imageUrl])
  return (
    <S.Container>
      <S.FormNewPost onSubmit={handleSubmit(handleNewContact)}>
        <S.Wrapper>
          <label htmlFor="title">Name: </label>
          <S.Input type="text" placeholder="Nome" {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}

          <label htmlFor="email">E-mail: </label>
          <S.Input type="text" placeholder="E-mail" {...register('email')} />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="contact">Contato: </label>
          <S.Input type="text" placeholder="Contato" {...register('contact')} />
          {errors.email && <span>{errors.email.message}</span>}

          <label htmlFor="">Imagem:</label>
          <S.Input
            type="file"
            placeholder="Imagem"
            onChange={(e) => handleUploadImage(e)}
          />
        </S.Wrapper>

        <S.Button type="submit" disabled={isSubmitDisabled}>
          Create
        </S.Button>
      </S.FormNewPost>
    </S.Container>
  )
}

export default CreateNewContact
