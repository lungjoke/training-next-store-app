import { Typography, Button } from '@mui/material'
import React from 'react'
import {
  AddCircleOutline as AddIcon,
  NotificationAddOutlined as NotiAddOutline,
  EditNote as EditIcon,
} from '@mui/icons-material'


type Props = {}

export default function Home({}: Props) {
  return (
    <>
    <Typography variant='h1'>NEXT.JS MUI APP
    </Typography>
    <Button variant='contained' color='primary'>
    Click me
    </Button>
    <div>
      <AddIcon color='primary'/>
      <AddIcon color='secondary'/>
      <AddIcon color='info'/>
      <AddIcon color='warning'/>
      <AddIcon color='error'/>
      <AddIcon color='success'/>
    </div>
    </>
  )
}