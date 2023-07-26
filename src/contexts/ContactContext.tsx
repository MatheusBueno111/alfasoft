import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
  useContext,
} from 'react'
import { Contact } from '../types'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../services/firebase'

interface ContactContextType {
  contacts: Contact[]
  fetchContacts: () => Promise<void>
}

export const ContactContext = createContext({} as ContactContextType)

interface ContactContextProviderProps {
  children: ReactNode
}

export const ContactContextProvider: React.FC<ContactContextProviderProps> = ({
  children,
}) => {
  const [contacts, setContacts] = useState<Contact[]>([])

  const contactsCollectionRef = collection(db, 'contacts')

  const fetchContacts = async () => {
    try {
      const response = await getDocs(contactsCollectionRef)
      const data = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Contact[]
      setContacts(data)
      console.log('data', data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <ContactContext.Provider value={{ contacts, fetchContacts }}>
      {children}
    </ContactContext.Provider>
  )
}

export const useContacts = (): ContactContextType => {
  const context = useContext(ContactContext)

  return context
}
