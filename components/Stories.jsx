import React, { useEffect, useState } from 'react'
import { Faker, faker } from '@faker-js/faker';
import Story from './Story'

function Stories() {
  const [suggestions, setSugguestions] = useState([])
    
 

 function createRandomUser() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}


    useEffect(() => {
      const suggestions = [...Array(10)].map((_, i) => ({
        ...createRandomUser(),
        id: 1,
      }))
      setSugguestions(suggestions)
      console.log(suggestions)
    }, [])



  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
        {suggestions.map(profile => (
          <Story key={profile.id} img={profile.avatar} profile={profile.username} />
        ))}
    </div>
  )
}

export default Stories