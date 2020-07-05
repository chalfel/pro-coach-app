import React, { useState, useEffect, useContext } from 'react'

import { ImageUpload, Input, Button, FormTitle } from '../../components'
import { AuthContext } from '../../contexts'
import { uploadImage } from '../../utils/uploadImages'
import { SafeAreaView } from './styles'

const MyAccount = () => {
  const { signed, user, signOut, updateUser } = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState({
    imgUrl: null,
    name: '',
    username: '',
    skype: '',
    discord: '',
    email: ''
  })

  useEffect(() => {
    if (signed) {
      setUserInfo((prev) => ({ ...prev, ...user }))
    }
  }, [user])

  const handleOnSkypeChange = (skype) => {
    setUserInfo((prev) => ({ ...prev, skype }))
  }

  const handleOnUsernameChange = (username) => {
    setUserInfo((prev) => ({ ...prev, username }))
  }

  const handleOnDiscordChange = (discord) => {
    setUserInfo((prev) => ({ ...prev, discord }))
  }
  const handleOnNameChange = (name) => {
    setUserInfo((prev) => ({ ...prev, name }))
  }

  const handleOnSave = async (e) => {
    e.preventDefault()
    await updateUser(userInfo)
  }

  const handleOnUpload = async (e) => {
    const imgUrl = await uploadImage()
    await updateUser({ imgUrl })
    setUserInfo((prev) => ({ ...prev, imgUrl }))
  }
  return (
    <SafeAreaView>
      <ImageUpload
        handleOnUpload={handleOnUpload}
        imgSrc={userInfo.imgUrl}
      ></ImageUpload>
      <FormTitle>Informações pessoais</FormTitle>
      <Input
        placeholder="Username"
        handleOnChange={handleOnUsernameChange}
        value={userInfo.username}
        iconName="user"
      />
      <Input
        disabled
        placeholder="Nome"
        handleOnChange={handleOnNameChange}
        value={userInfo.name}
        iconName="smile"
      />
      <Input
        placeholder="Discord"
        handleOnChange={handleOnDiscordChange}
        value={userInfo.discord}
        iconName="message-circle"
      />
      <Input
        placeholder="Skype"
        handleOnChange={handleOnSkypeChange}
        value={userInfo.skype}
        iconName="message-circle"
      />
      <Button primary handleOnPress={handleOnSave}>
        Salvar alterações
      </Button>
      <Button handleOnPress={signOut}>Logout</Button>
    </SafeAreaView>
  )
}
export default MyAccount
