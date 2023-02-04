import { useEffect } from 'react'
import { useState } from 'react'
import CardComponent from '../card-component/card-component'

function ComponentList() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/components')
      .then(res => res.json())
      .then((data) => setComponents(data))
  }, [])
  
  return (
    <div>
      {components.map((c) => (
        <CardComponent
          key={c.id}
          description={c.description}
          image={c.image}
          title={c.title}
          type={c.type}
          id={c.id}
        />
      ))}
    </div>
  )
}

export default ComponentList;