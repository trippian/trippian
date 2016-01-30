import React from 'react'
import {
  TeamCardWidget
}
from '../index'
let team = [{
  'name': 'Audrey Li',
  'location': 'San Francisco',
  'role': 'Project Owner & Software Engineeer',
  'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Audrey.jpg ',
  'about': 'I was raised in a small remote village in China, and had not been to a big city until I was 19. I am fascinated by different cultures and histories. I enjoy travelling and learning foreign languages, particularly Spanish, German, and French. '
}, {
  'name': 'Elliot Chi',
  'location': 'San Francisco',
  'role': 'Software Engineer & Scrum Master',
  'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Elliot-1.jpg ',
  'about': 'I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him. I enjoy watching the Warriors and cheering for Steph Curry. I have a man crush on him.'
}, {
  'name': 'Joe Lagasse',
  'location': 'San Francisco',
  'role': 'Software Engineer',
  'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Joe.jpg ',
  'about': 'Leading the protests for more Qdobas in California, weekend security tester, lifter of all heavy things and living the vegetarian lifestyle since the days where your “friends” would put their lunch meat in your lunch box when you weren’t looking.'
}, {
  'name': 'Yale Yuen',
  'location': 'San Francisco',
  'role': 'Software Engineer',
  'image': 'https://s3-us-west-1.amazonaws.com/trippian/about/Yale.jpg ',
  'about': 'I am basically married. Elliot is my side piece.I am basically married. Elliot is my side piece.I am basically married. Elliot is my side piece.'
}]

const TeamCardsWidget = ({
  dataList = team
}) => {
  return (
    <div>
    { 
       dataList.map((member, key) => (
         <TeamCardWidget key={key} {...member} />
      ))
   }
    </div>
  )
}
TeamCardsWidget.displayName = 'TeamCardsWidget'

export default TeamCardsWidget
