const presentSimpleContent = {
    en: {
      title: "Simple Present Tense",
      explanation: `
        The simple present tense is used to describe habits, unchanging situations, general truths, and fixed arrangements.
        
        Structure:
        - For most verbs: Subject + base verb (+ s/es for he, she, it)
        - Negative: Subject + do/does not + base verb
        - Question: Do/Does + subject + base verb
  
        **Examples**:
        - I eat breakfast at 7 a.m.
        - She goes to school by bus.
        - Do you like pizza?
        - He doesn't play football.
      `,
      buttonText: "Start Quiz",
      table: [
        {
          type: "Affirmative",
          structure: "Subject + base verb (+s)",
          example: "She goes to work.",
          rule: "For he, she, and it (third person singular), add 's' to most verbs. If the verb ends in -s, -x, -ch, -sh, or -o, add 'es'. If the verb ends in a consonant + 'y', change 'y' to 'ies'."
        },
        {
          type: "Negative",
          structure: "Subject + do/does not + base verb",
          example: "He doesn't play soccer.",
          rule: "For negative sentences, we use 'do not' or 'does not' (for he, she, it). No 's' is added to the verb in the negative form."
        },
        {
          type: "Question",
          structure: "Do/Does + subject + base verb",
          example: "Do you like ice cream?",
          rule: "In questions, we use 'do' or 'does' (for he, she, it). The base verb does not change."
        }
      ]
    },
    es: {
      title: "Presente Simple",
      explanation: `
        El presente simple se usa para describir hábitos, situaciones invariables, verdades generales y acuerdos fijos.
  
        Estructura:
        - Para la mayoría de los verbos: Sujeto + verbo base (+ s/es para he, she, it)
        - Negación: Sujeto + do/does not + verbo base
        - Pregunta: Do/Does + sujeto + verbo base
  
        **Ejemplos**:
        - Yo desayuno a las 7 a.m.
        - Ella va a la escuela en autobús.
        - ¿Te gusta la pizza?
        - Él no juega fútbol.
      `,
      buttonText: "Comenzar Quiz",
      table: [
        {
          type: "Afirmativa",
          structure: "Sujeto + verbo base (+s)",
          example: "Ella va al trabajo.",
          rule: "Para he, she e it (tercera persona singular), se agrega 's' a la mayoría de los verbos. Si el verbo termina en -s, -x, -ch, -sh o -o, se agrega 'es'. Si el verbo termina en una consonante + 'y', se cambia la 'y' por 'ies'."
        },
        {
          type: "Negativa",
          structure: "Sujeto + do/does not + verbo base",
          example: "Él no juega al fútbol.",
          rule: "En oraciones negativas, usamos 'do not' o 'does not' (para he, she, it). No se agrega 's' al verbo en la forma negativa."
        },
        {
          type: "Pregunta",
          structure: "Do/Does + sujeto + verbo base",
          example: "¿Te gusta el helado?",
          rule: "En preguntas, usamos 'do' o 'does' (para he, she, it). El verbo base no cambia."
        }
      ]
    },
    pt: {
      title: "Presente Simples",
      explanation: `
        O presente simples é usado para descrever hábitos, situações imutáveis, verdades gerais e compromissos fixos.
  
        Estrutura:
        - Para a maioria dos verbos: Sujeito + verbo base (+ s/es para he, she, it)
        - Negativa: Sujeito + do/does not + verbo base
        - Pergunta: Do/Does + sujeito + verbo base
  
        **Exemplos**:
        - Eu tomo café da manhã às 7h.
        - Ela vai para a escola de ônibus.
        - Você gosta de pizza?
        - Ele não joga futebol.
      `,
      buttonText: "Iniciar Quiz",
      table: [
        {
          type: "Afirmativa",
          structure: "Sujeito + verbo base (+s)",
          example: "Ela vai ao trabalho.",
          rule: "Para he, she e it (terceira pessoa do singular), adiciona-se 's' à maioria dos verbos. Se o verbo terminar em -s, -x, -ch, -sh ou -o, adiciona-se 'es'. Se o verbo terminar em uma consoante + 'y', troca-se o 'y' por 'ies'."
        },
        {
          type: "Negativa",
          structure: "Sujeito + do/does not + verbo base",
          example: "Ele não joga futebol.",
          rule: "Nas frases negativas, usamos 'do not' ou 'does not' (para he, she, it). Não se adiciona 's' ao verbo na forma negativa."
        },
        {
          type: "Pergunta",
          structure: "Do/Does + sujeito + verbo base",
          example: "Você gosta de sorvete?",
          rule: "Nas perguntas, usamos 'do' ou 'does' (para he, she, it). O verbo base não muda."
        }
      ]
    }  
};

export type Lang = keyof typeof presentSimpleContent;
export default presentSimpleContent;
