import React, { useState, useEffect } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { SafeAreaView } from './styles'

const MyAccount = () => {
  const [user, setUser] = useState({
    imgUrl: ' ',
    name: '',
    nickname: '',
    skype: '',
    discord: '',
    email: ''
  })

  useEffect(() => {
    const isAuth = true
    const userInfo = {
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg/220px-Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg',
      name: 'Caio Felix',
      nickname: 'chalfel',
      skype: 'chalfel',
      discord: 'chalfel',
      email: 'caiohalcsik@gmail.com'
    }
    if (isAuth) {
      setUser(userInfo)
    }
  }, [])

  const handleOnEmailChange = (e) => {
    const email = e.target.value
    setUser((prev) => ({ ...prev, email }))
  }

  const handleOnSkypeChange = (e) => {
    const skype = e.target.value
    setUser((prev) => ({ ...prev, skype }))
  }

  const handleOnNicknameChange = (e) => {
    const nickname = e.target.value
    setUser((prev) => ({ ...prev, nickname }))
  }

  const handleOnDiscordChange = (e) => {
    const discord = e.target.value
    setUser((prev) => ({ ...prev, discord }))
  }

  const handleOnSave = (e) => {
    e.preventDefault()

    console.log(user)
  }

  const handleOnLogout = (e) => {
    e.preventDefault()

    console.log('tchau')
  }
  return (
    <SafeAreaView>
      <ImageUpload imgSrc={user.imgUrl}></ImageUpload>
      <FormTitle>Informações pessoais</FormTitle>
      <Input
        type="Nickname"
        placeholder="Nickname"
        handleOnChange={handleOnNicknameChange}
        value={user.nickname}
      />
      <Input
        placeholder="E-mail"
        handleOnChange={handleOnEmailChange}
        value={user.email}
      />
      <Input
        placeholder="Discord"
        handleOnChange={handleOnDiscordChange}
        value={user.discord}
      />
      <Input
        placeholder="Skype"
        handleOnChange={handleOnSkypeChange}
        value={user.skype}
      />
      <Button primary handleOnPress={handleOnSave}>
        Salvar alterações
      </Button>
      <Button handleOnPress={handleOnLogout}>Logout</Button>
    </SafeAreaView>
  )
}
export default MyAccount
