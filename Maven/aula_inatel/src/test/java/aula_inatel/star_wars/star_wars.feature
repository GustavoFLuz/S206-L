Feature: Testando API do StarWars

Scenario: Testando retorno de people/1/
    Given url "https://swapi.dev/api/people/1/"
    When method get
    Then status 200

Scenario: Testando retorno de people/1/
    Given url "https://swapi.dev/api/people/1/342"
    When method get
    Then status 404