import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeores = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery('super-heroes', fetchSuperHeores)

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h2>RQ Super Heroes Page</h2>
    {
      data?.data.map(hero => <div>{hero.name}</div>)
    }
    </>
  )
}

export default RQSuperHeroesPage;