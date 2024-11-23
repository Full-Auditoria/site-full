import React from 'react'
import { Service } from '../Mock'
import { Container } from './style'

export default function Card({ service }: { service: Service }) {
  return (
    <Container>
        <p>{service.title}</p>
    </Container>
  )
}
