import React from 'react'

import {
  Root,
  Filter,
  Title,
  FilterSection,
  FilterSectionTitle,
  FilterDescription,
  FilterOption,
  OptionsContainer,
  SearchButton
} from './filter.elements'

const filter = () => {
  return (
    <Root>
      <Filter>
        <Title>Filter</Title>
        <FilterSection>
          <FilterSectionTitle>Filter1</FilterSectionTitle>
          <FilterDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolorum?</FilterDescription>
          <OptionsContainer>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
          </OptionsContainer>
        </FilterSection>
        <FilterSection>
          <FilterSectionTitle>Filter1</FilterSectionTitle>
          <FilterDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, dolorum?</FilterDescription>
          <OptionsContainer>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
            <FilterOption>Option</FilterOption>
          </OptionsContainer>
        </FilterSection>

      </Filter>
      <SearchButton>Search Now</SearchButton>
    </Root>
  )
}

export default filter