import React, { useEffect, useState } from 'react';
import './App.css';
import { Formik } from 'formik';
import { initializeApp } from 'firebase/app'

import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc,
  query, where,
  orderBy, serverTimestamp
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFX6D3p3KR_DgEf1d25cSXBMsQpwSkglQ",
  authDomain: "fir-9-pro-solution.firebaseapp.com",
  projectId: "fir-9-pro-solution",
  storageBucket: "fir-9-pro-solution.appspot.com",
  messagingSenderId: "753852677251",
  appId: "1:753852677251:web:93429dece79b7654b56fb6"
};

// init firabase app
initializeApp(firebaseConfig)

// init service
const db = getFirestore()

// collection ref
const colRef = collection(db, 'books')

// query collection
const q = query(colRef, where('author', '==', 'Ali El-Helbawi'), orderBy('createdAt', 'asc'))

// collection data

/*
getDocs(colRef).then((snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books);
}).catch(error => {
  console.log(error.message);
})
*/


// real time collection data
onSnapshot(q, (snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id })
  })
  console.log(books);
})
///
function App() {

  const addToFirebase = (data) => {
    addDoc(colRef, { ...data, createdAt: serverTimestamp() }).then(() => {
    })

  }
  const removeFromFirebase = (data) => {
    const docRef = doc(db, 'books', data.id)
    deleteDoc(docRef).then(() => {
    })
  }
  return (
    <div className='page'>


      <div className='add'>
        <h1>Add </h1>
        <Formik
          initialValues={{ title: '', author: '' }}
          validate={values => {
            const errors = {};
            if (!values.title) {
              errors.title = 'Required';
            }
            if (!values.author) {
              errors.author = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            addToFirebase(values)
            setSubmitting(false)
            resetForm()

          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  placeholder={'title'}
                />
                {errors.title && touched.title && errors.title}
              </div>
              <div>
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.author}
                  placeholder={'author'}
                />
                {errors.author && touched.author && errors.author}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>

      <div className='remove'>
        <h1>Remove</h1>
        <Formik
          initialValues={{ id: '' }}
          validate={values => {
            const errors = {};
            if (!values.id) {
              errors.title = 'Required';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            removeFromFirebase(values)
            setSubmitting(false)
            resetForm()
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="id"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.id}
                  placeholder={'id'}
                />
                {errors.id && touched.id && errors.id}
              </div>
              <div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      {/* <div >
        {books.map((book) => {
          return (
            <div key={book.id} className='books '>
              <h1>{`Author: ${book.author}`}</h1>
              <h1>{`title: ${book.title}`}</h1>
            </div>
          )
        }
        )}
      </div> */}
    </div>
  );
}

export default App;
