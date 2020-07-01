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

  const handleOnEmailChange = (email) => {
    setUserInfo((prev) => ({ ...prev, email }))
  }

  const handleOnSkypeChange = (skype) => {
    setUserInfo((prev) => ({ ...prev, skype }))
  }

  const handleOnUsernameChange = (username) => {
    setUserInfo((prev) => ({ ...prev, username }))
  }

  const handleOnDiscordChange = (discord) => {
    setUserInfo((prev) => ({ ...prev, discord }))
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
      />
      <Input
        disabled
        placeholder="E-mail"
        handleOnChange={handleOnEmailChange}
        value={userInfo.email}
      />
      <Input
        placeholder="Discord"
        handleOnChange={handleOnDiscordChange}
        value={userInfo.discord}
      />
      <Input
        placeholder="Skype"
        handleOnChange={handleOnSkypeChange}
        value={userInfo.skype}
      />
      <Button primary handleOnPress={handleOnSave}>
        Salvar alterações
      </Button>
      <Button handleOnPress={signOut}>Logout</Button>
    </SafeAreaView>
  )
}
export default MyAccount
