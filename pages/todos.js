import React from 'react'
import Head from 'next/head';
import Todo from '../components/Todo';
export default function todos({ x }) {

  return (
    <>
       <Head>
        <title>List of all todos</title>
        <script src="https://cdn.tailwindcss.com"></script>

      </Head>
      <div className='text-6xl text-center'>todos</div>
      {
        x.map(function (todo) {
          return <Todo todo={todo}/>
        })
      }
    </>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      x: data
    }
  }
}