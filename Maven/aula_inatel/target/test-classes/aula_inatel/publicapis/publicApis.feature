Feature: Testando API de APIs publicas

Background: Executa antes de cada teste
    * def url_base = 'https://api.publicapis.org/'

Scenario: Testando disponibilidade da API
    Given url url_base
    When method get
    Then status 200

Scenario: Testando tipos de entries do retorno da API
    Given url url_base
    And path "/entries"
    When method get
    Then status 200
    And match each $.entries contains {API: "#string", HTTPS: "#boolean", Link: "#string"}

Scenario: Testando retorno de categorias da API
    Given url url_base
    And path "/categories"
    When method get
    Then status 200
    And match each $.categories == "#string"

Scenario: Testando se count equivale a quantidade de categorias da API
    Given url url_base
    And path "/categories"
    When method get
    Then status 200
    And def length = $.count
    And match $.categories == "#["+length+"]"

Scenario: Testando se parâmetro de auth null não retorna entry com auth
    Given url url_base
    And path "/entries"
    And param auth = "null"
    When method get
    Then status 200
    And match each $.entries !contains {Auth: "#string?_.length>0"}

Scenario: Testando de parâmetro não existente retorna erro
    Given url url_base
    And path "/entries"
    And param image = "123"
    When method get
    Then status 400