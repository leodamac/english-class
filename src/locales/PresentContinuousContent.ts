const presentContinuousContent = {
    en: {
      title: "Present Continuous Tense",
      explanation: `
        The present continuous tense is used to describe actions happening at the moment of speaking or temporary situations.
  
        Structure:
        - Affirmative: Subject + am/is/are + verb-ing (gerund)
        - Negative: Subject + am/is/are + not + verb-ing
        - Question: Am/Is/Are + subject + verb-ing?
  
        **What is a Gerund?**
        A gerund is the '-ing' form of a verb used as part of the verb phrase in continuous tenses. It is formed by adding '-ing' to the base form of the verb.
  
        **Examples**:
        - I am studying English.
        - She is watching a movie.
        - Are you listening to me?
        - They aren't working today.
      `,
      buttonText: "Start Quiz",
      table: [
        {
          type: "Affirmative",
          structure: "Subject + am/is/are + verb-ing",
          example: "He is reading a book.",
          rule: "Use 'am' with I, 'is' with he/she/it, and 'are' with you/we/they. Add '-ing' to the verb."
        },
        {
          type: "Negative",
          structure: "Subject + am/is/are + not + verb-ing",
          example: "We are not sleeping.",
          rule: "Insert 'not' after the correct form of 'to be' (am/is/are). The verb keeps the '-ing' form."
        },
        {
          type: "Question",
          structure: "Am/Is/Are + subject + verb-ing?",
          example: "Is she coming to the party?",
          rule: "Invert the subject and the verb 'to be'. The main verb is in gerund form (-ing)."
        }
      ],
      notes: `
        **Exceptions in Gerund Formation**:
        - For verbs ending in **-e**, drop the 'e' and add '-ing': *make → making*
        - For one-syllable verbs ending in consonant-vowel-consonant, double the last consonant: *run → running*
        - For verbs ending in **-ie**, change 'ie' to 'y' and add '-ing': *die → dying*
      `
    },
    es: {
      title: "Presente Continuo",
      explanation: `
        El presente continuo se usa para describir acciones que están ocurriendo en el momento de hablar o situaciones temporales.
  
        Estructura:
        - Afirmativa: Sujeto + am/is/are + verbo en gerundio
        - Negativa: Sujeto + am/is/are + not + verbo en gerundio
        - Interrogativa: Am/Is/Are + sujeto + verbo en gerundio?
  
        **¿Qué es un Gerundio?**
        El gerundio en inglés es la forma del verbo terminada en '-ing'. Se utiliza como parte de los tiempos continuos.
  
        **Ejemplos**:
        - Estoy estudiando inglés. → I am studying English.
        - Ella está viendo una película. → She is watching a movie.
        - ¿Estás escuchándome? → Are you listening to me?
        - Ellos no están trabajando hoy. → They aren't working today.
      `,
      buttonText: "Comenzar Quiz",
      table: [
        {
          type: "Afirmativa",
          structure: "Sujeto + am/is/are + verbo-ing",
          example: "Él está leyendo un libro. → He is reading a book.",
          rule: "Se usa 'am' con I, 'is' con he/she/it y 'are' con you/we/they. Se añade '-ing' al verbo principal."
        },
        {
          type: "Negativa",
          structure: "Sujeto + am/is/are + not + verbo-ing",
          example: "Nosotros no estamos durmiendo. → We are not sleeping.",
          rule: "Se coloca 'not' después del verbo 'to be'. El verbo principal permanece en gerundio (-ing)."
        },
        {
          type: "Interrogativa",
          structure: "Am/Is/Are + sujeto + verbo-ing?",
          example: "¿Ella viene a la fiesta? → Is she coming to the party?",
          rule: "Se invierte el orden entre el sujeto y el verbo 'to be'. El verbo principal se mantiene en forma '-ing'."
        }
      ],
      notes: `
        **Excepciones en la formación del Gerundio**:
        - Si el verbo termina en **-e**, se elimina la 'e' y se añade '-ing': *make → making*
        - Si es un verbo de una sílaba que termina en consonante-vocal-consonante, se duplica la consonante final: *run → running*
        - Si el verbo termina en **-ie**, se cambia 'ie' por 'y' y se añade '-ing': *die → dying*
      `
    },
    pt: {
      title: "Presente Contínuo",
      explanation: `
        O presente contínuo é usado para descrever ações que estão acontecendo no momento da fala ou situações temporárias.
  
        Estrutura:
        - Afirmativa: Sujeito + am/is/are + verbo com -ing (gerúndio)
        - Negativa: Sujeito + am/is/are + not + verbo com -ing
        - Interrogativa: Am/Is/Are + sujeito + verbo com -ing?
  
        **O que é um Gerúndio?**
        O gerúndio em inglês é a forma do verbo com a terminação '-ing'. É usado nos tempos verbais contínuos.
  
        **Exemplos**:
        - Eu estou estudando inglês. → I am studying English.
        - Ela está assistindo a um filme. → She is watching a movie.
        - Você está me ouvindo? → Are you listening to me?
        - Eles não estão trabalhando hoje. → They aren't working today.
      `,
      buttonText: "Iniciar Quiz",
      table: [
        {
          type: "Afirmativa",
          structure: "Sujeito + am/is/are + verbo-ing",
          example: "Ele está lendo um livro. → He is reading a book.",
          rule: "Use 'am' com I, 'is' com he/she/it, e 'are' com you/we/they. Adicione '-ing' ao verbo principal."
        },
        {
          type: "Negativa",
          structure: "Sujeito + am/is/are + not + verbo-ing",
          example: "Nós não estamos dormindo. → We are not sleeping.",
          rule: "Adicione 'not' depois do verbo 'to be'. O verbo principal continua com a forma '-ing'."
        },
        {
          type: "Interrogativa",
          structure: "Am/Is/Are + sujeito + verbo-ing?",
          example: "Ela está vindo para a festa? → Is she coming to the party?",
          rule: "Inverta o sujeito e o verbo 'to be'. O verbo principal permanece com a forma '-ing'."
        }
      ],
      notes: `
        **Exceções na formação do Gerúndio**:
        - Para verbos terminados em **-e**, retire o 'e' e adicione '-ing': *make → making*
        - Para verbos de uma sílaba com consoante-vogal-consoante, dobre a última consoante: *run → running*
        - Para verbos terminados em **-ie**, troque 'ie' por 'y' e adicione '-ing': *die → dying*
      `
    }
  };
  
  export type Lang = keyof typeof presentContinuousContent;
  export default presentContinuousContent;
  