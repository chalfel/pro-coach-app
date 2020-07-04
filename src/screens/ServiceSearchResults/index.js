import React, { useState, useEffect } from 'react'

import { Input, Card } from '../../components'
import { api, coachServiceEndpoint } from '../../configs/connection'
import { Container, ScrollView } from './styles'

const ServiceSearchResults = ({ route }) => {
  const {
    text,
    placeholder,
    iconName,
    autoCorrectSearch,
    returnKeyType
  } = route.params
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState(text)
  const [inputValue, setInputValue] = useState(text)

  useEffect(() => {
    const encodedSearchText = encodeURIComponent(searchText.toLowerCase())
    const queryParams = {
      params: {
        sort: 'desc(rating)',
        contains: `username(${encodedSearchText}),gametitle(${encodedSearchText})`
      }
    }

    api
      .get(`/${coachServiceEndpoint}`, queryParams)
      .then(({ data }) => setSearchResults(data))
      .catch((e) => console.log(e))
  }, [searchText])

  return (
    <Container>
      <Input
        placeholder={placeholder}
        iconName={iconName}
        value={inputValue}
        autoCorrect={autoCorrectSearch}
        handleOnSubmit={(text) => setSearchText(text)}
        handleOnChange={(text) => setInputValue(text)}
        returnKeyType={returnKeyType}
      />
      <ScrollView>
        {searchResults.map(({ _id, user, game, name, description, rating }) => (
          <Card
            key={_id}
            coachName={user}
            gameTitle={game}
            serviceTitle={name}
            serviceDetails={description}
            score={rating}
          />
        ))}
      </ScrollView>
    </Container>
  )
}

export default ServiceSearchResults
