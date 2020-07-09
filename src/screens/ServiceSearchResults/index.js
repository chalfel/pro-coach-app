import React, { useState, useEffect } from 'react'

import { Input, Card } from '../../components'
import { getCoachService } from '../../services/coachService'
import { handleGenericApiError } from '../../utils/error'
import { Container, ScrollView } from './styles'

const ServiceSearchResults = ({ navigation, route }) => {
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
    const getSearchResults = async () => {
      const encodedSearchText = encodeURIComponent(searchText.toLowerCase())
      const queryParams = {
        params: {
          sort: 'desc(rating)',
          contains: `username(${encodedSearchText}),gameTitle(${encodedSearchText})`
        }
      }

      try {
        setSearchResults(await getCoachService(queryParams))
      } catch (err) {
        handleGenericApiError(getSearchResults)
      }
    }

    getSearchResults()
  }, [searchText])

  return (
    <Container>
      <Input
        placeholder={placeholder}
        iconName={iconName}
        value={inputValue}
        autoCorrect={autoCorrectSearch}
        handleOnSubmit={setSearchText}
        handleOnChange={setInputValue}
        returnKeyType={returnKeyType}
      />
      <ScrollView>
        {searchResults.map((service) => {
          const { _id, user, game, name, description, rating } = service
          return (
            <Card
              handleOnPress={() =>
                navigation.navigate('CoachService', { service })
              }
              key={_id}
              coachName={user.username}
              gameTitle={game.gameTitle}
              serviceTitle={name}
              serviceDetails={description}
              score={rating}
            />
          )
        })}
      </ScrollView>
    </Container>
  )
}

export default ServiceSearchResults
