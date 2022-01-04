const data = {
  locale: "es",
  completedHtml:
    "<p> creemos que para {name} sería genial el <b>caldo de huesos</b> </p><br /><img src='https://www.missblasco.com/wp-content/uploads/2020/02/caldodehuesos_bote_portada-1.jpg' alt='imagen caldo de huesos' /><br /><a href='#'>Ver la receta</a><br /><button type='button' onclick='window.survey.clear(true, true)'>Reiniciar</button>",
  completedHtmlOnCondition: [
    {
      expression:
        "{species} = 'dog' and {meal} = ['kibble'] and {desease} empty or {desease} = {'nothing'}",
      html: "<p> creemos que para {name} sería genial suplementar con <b>Omega 3</b> </p><br /><img src='https://www.altudog.com/933-thickbox_default/aceite-de-salmon-500ml.jpg' alt='imagen caldo de huesos' /><br /><a href='#'>Ver Nuestras recomendaciones</a><br /><button type='button' onclick='window.survey.clear(true, true)'>Reiniciar</button>",
    },
  ],
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "name",
          isRequired: true,
          title: {
            es: "Nombre de tu Peludo",
          },
        },
        {
          type: "imagepicker",
          name: "species",
          isRequired: true,
          visibleIf: "{name} notempty",
          requiredErrorText: "Necesitas escoger una especie para {name} ",
          title: {
            es: "Escoge de que especie es {name}",
          },
          choices: [
            {
              value: "dog",
              imageLink:
                "https://lh3.googleusercontent.com/tXzE4t7shUbPoPZLWahE3s5fjYGCzLJGrkpiS2u0sezohuWinvvDmADSpLzjshsQ78SivxZCNWuki7-ZvYBTyiC9hu4Ub_vbES_D7LaBWoUZbC4yx3eo7v-0l4sT8PSuP49BeNXCVw=w2400",
            },
            {
              value: "cat",
              imageLink:
                "https://lh3.googleusercontent.com/2A6oGmrmIJ2CuE4Nr6vuhKRJ_y12kH6i_4SibX2BNest5u3tJOFZO-tVSYxlcI_ZjiC4nHvvkeIXx_lXDNQkUHbaXmD8vXSdyeX6BppHK7iMhLZQgF8pE_cpUEpng5hsiBIkCHcK6w=w2400",
            },
          ],
          imageWidth: 150,
          imageHeight: 150,
        },
      ],
      navigationButtonsVisibility: "show",
    },
    {
      name: "page2",
      elements: [
        {
          type: "checkbox",
          name: "meal",
          title: "¿Qué come actualmente?",
          description: "Qué come {name}  habitualmente?",
          choices: [
            {
              value: "kibble",
              text: "Pienso",
            },
            {
              value: "kibble-semi",
              text: "Pienso humedo o semihumedo (latitas)",
            },
            {
              value: "cooked",
              text: "Dieta Cocinada",
            },
            {
              value: "comercial-cooked",
              text: "Dieta Cocinada comercial",
            },
            {
              value: "barf",
              text: "BARF / Presa hecho en casa",
            },
            {
              value: "comercial-barf",
              text: "BARF / Presa comercial",
            },
          ],
        },
        {
          type: "text",
          name: "q04",
          visibleIf: "{q03} = ['item1', 'item2', 'item4', 'item6']",
          title: "Marca y producto",
        },
      ],
    },
    {
      name: "page3",
      elements: [
        {
          type: "checkbox",
          name: "disease",
          title: "¿{name} tiene algún problema de salud?",
          choices: [
            {
              value: "intolerance",
              text: "Alergias o Intolerancias",
            },
            {
              value: "cancer",
              text: "Cancer",
            },
            {
              value: "liver",
              text: "Problemas de higado",
            },
            {
              value: "stones",
              text: "Calculos Renales",
            },
            {
              value: "obesity",
              text: "Obesidad",
            },
            {
              value: "articular",
              text: "Problemas articulares",
            },
            {
              value: "renal",
              text: "Insuficiencia Renal",
            },
            {
              value: "epilepsy",
              text: "Epilepsia",
            },
            {
              value: "torsion",
              text: "Torsion gastrica",
            },
            {
              value: "hepatitis",
              text: "Hepatitis",
            },
            {
              value: "nothing",
              text: "Sin problemas de salud",
            },
          ],
          hasOther: true,
          otherText: "Problemas de comportamiento",
        },
        {
          type: "text",
          name: "q06",
          visibleIf:
            "{q05} = ['item1', 'item2', 'item3', 'item4', 'item6', 'item7', 'item8', 'other']",
          title: "¿Puedes espeficicarnos un poquito más?",
        },
      ],
    },
    {
      name: "page4",
      elements: [
        {
          type: "dropdown",
          name: "q07",
          title: {
            es: "Edad",
          },
          choices: [
            {
              value: "item1",
              text: {
                es: "Cachorro",
              },
            },
            {
              value: "item2",
              text: {
                es: "Adulto",
              },
            },
            {
              value: "item3",
              text: {
                es: "Senior",
              },
            },
          ],
        },
        {
          type: "dropdown",
          name: "q08",
          title: {
            es: "Sexo",
          },
          choices: [
            {
              value: "item1",
              text: {
                es: "Macho",
              },
            },
            {
              value: "item2",
              text: {
                es: "Hembra",
              },
            },
          ],
        },
        {
          type: "text",
          name: "q09",
          title: "Peso",
        },
        {
          type: "dropdown",
          name: "q10",
          visibleIf: "{q02} = 'dog'",
          title: "Tamaño",
          choices: [
            {
              value: "item1",
              text: "Mini",
            },
            {
              value: "item2",
              text: "Pegueño",
            },
            {
              value: "item3",
              text: "Medianno",
            },
            {
              value: "item4",
              text: "Grande",
            },
            {
              value: "item5",
              text: "Gigante",
            },
          ],
        },
        {
          type: "dropdown",
          name: "q11",
          visibleIf: "{q02} = 'dog'",
          title: "Raza",
          choices: ["item1", "item2", "item3"],
          hasOther: true,
        },
      ],
    },
    {
      name: "page5",
      elements: [
        {
          type: "imagepicker",
          name: "question1",
          visibleIf: "{species} = 'dog'",
          title: "Está en su peso Ideal?",
          choices: [
            {
              value: "perro1",
              text: "Costillas, vértebras lumbares, huesos pélvicos y todas las prominencias óseas que sean evidentes desde una cierta distancia. Ninguna grasa corporal perceptible. Pérdida obvia de masa muscular.",
              imageLink:
                "https://lh3.googleusercontent.com/rWAdePsDT_ZeZuttUrxL3SYwQejXIyn7pbkVPU94lVRVXImxXYSN0hBECvc59AI4RldS5ZVAr_Ep30UDeicOS8Xj31jJqT93g-nAZ59r4lCHii3k6ORIe3zTaV68ihv1phaEhDRuDA=w2400",
            },
            {
              value: "perro2",
              text: "Depósitos masivos de grasa sobre el tórax, columna y base de la cola. Cintura y pliegues abdominales ausentes. Depósitos de grasa en el cuello y extremidades. Distensión abdominal obvia.",
              imageLink:
                "https://lh3.googleusercontent.com/yCQnD738wck_CPVJbzgsq5sOsyXqWsolY-FEOa3G9rrSI-thzc56T65w2eklcyaBpIISPK7tyu4syrhUP0YHq3NPMDUbjG468r6sCATl188ghZ75GJyS5rWKCAd9lQUO7bQkE7CEnw=w2400",
            },
            {
              value: "perro3",
              text: "Costillas palpables con dificultad; pesada cubierta de grasa. Depósitos de grasa observables sobre el área lumbar y la base de la cola. Cintura ausente o apenas visible. Puede haber pliegue abdominal.",
              imageLink:
                "https://lh3.googleusercontent.com/ONYWlCMmUF4Ku2bPFgKZcTpXGhCf9C-7YBruxH6UvsdwejfxRailWQ6cohnK0o-MqIgmfIVoVRKd4B146ZMtzgFQ2UIPPrAMabb2yf2Pw_4Ejozy95w8az3BcYAwsq0OI8y_hi2Nyw=w2400",
            },
            {
              value: "perro4",
              text: "Costillas palpables sin exceso de recubrimiento de grasa. Se observa la cintura detrás de las costillas cuando se observa desde arriba. Se observa pliegue del abdomen cuando se observa desde un lado.",
              imageLink:
                "https://lh3.googleusercontent.com/WIjDF8NAYgP7dKy_MWWE6yzuk6qYNkCI3td45GF3aFSwBamY-9dNTznoG-ACq4-2aEbjYHfwLfI4M0O9TyH_UH0fYmB7C9vqrkJaJy6bnkx3ClTMZyuPCQa5wVo062JYVk2xpN_T4A=w2400",
            },
            {
              value: "perro5",
              text: "Costillas fácilmente palpables y que pueden ser visibles sin grasa palpable. Las partes superiores de las vértebras lumbares son visibles. Los huesos pélvicos se hacen prominentes. Cintura obvia y pliegues abdominales.",
              imageLink:
                "https://lh3.googleusercontent.com/vAj8GIvkxltb0KHmzveYm3V67B_QuMsG9mJuz_kVApIO21exya4oNnfXdsTNRWMlTXYoRP-YTiIylQrw4E2XZTZ5nAv-jl6Zy7vXleGKXfZ5YQUqm1ky4hMmV_IHYoqVjN_SeorFbQ=w2400",
            },
          ],
          showLabel: true,
        },
        {
          type: "imagepicker",
          name: "question2",
          visibleIf: "{q02} = 'cat'",
          title: "Está en su peso Ideal?",
          choices: [
            {
              value: "Gato 1",
              text: "Costillas visibles en los gatos de pelo corto; sin grasa palpable; pliegue abdominal notorio; vértebras lumbares y alas ilíacas obvias y fácilmente palpables.",
              imageLink:
                "https://lh3.googleusercontent.com/0lweR-J5lXvQAKmKMNyAe7cMF9F_o0pjTlxSS_ZaeuId8qI-yY_mL3GxWTprDFUbFJGfRkm0cf3uMxuaSMn2GrIVBZ4A5tRW073PHX8kqMiXdbAcrQCWga2K7Ih_kuMi9D3wUOCkxA=w2400",
            },
            {
              value: "Gato 2",
              text: "Costillas fácilmente palpables con mínimo recubrimiento de grasa; vértebras lumbares obvias; cintura obvia detrás de las costillas; grasa abdominal mínima.",
              imageLink:
                "https://lh3.googleusercontent.com/rYGZDnG2DuAbs_4RSZWu3PUBlpJINlINu-Iu7jZ41Te7RH2FkqGYGNv9PcEn5MIetRBNSdeT80FU6B-w45iGoeLGT4foIfZkzTMYDgN-2Yo185LX5zWqMklN9rYPiTcXLpiEPuUEkQ=w2400",
            },
            {
              value: "Gato 3",
              text: "Bien proporcionados; se observa la cintura detrás de las costillas; costillas palpables con ligera cubierta de grasa; mínima acumulación de grasa abdominal.",
              imageLink:
                "https://lh3.googleusercontent.com/LY_QIEiiP9dbhcA59AVt3HkjgcD1Hkb4UryriH4pw5JDtlsGdzCxLT_OrRX91WAiLjUHaX-cQi0xvuqicR8aFXNjM-794LVTQVJCog-HtBCibJqDSwOQlb6IzBL0YEeIGGd0OQwWQw=w2400",
            },
            {
              value: "Gato 4",
              text: "Costillas no fácilmente palpables con cubierta moderada de grasa; cintura apenas visible; redondeo obvio del abdomen; moderada acumulación de grasa abdominal.",
              imageLink:
                "https://lh3.googleusercontent.com/opKE49-kP8yi1vKs7Zz7JP4pXOhzfjnkFk1XBBBNGqT3e_fJnHLddy7Bcc7uREh4fUx6-nAbh-L0V6g4s2jNaQIdQEL7o0dV3Us86scg3hzS5_eMBy7umnd6TRkHaXdS3aUCADdAJw=w2400",
            },
            {
              value: "Gato 5",
              text: "Costillas no palpables debajo de una pesada cubierta de grasa; depósitos de grasa pesados sobre el área lumbar, cara y extremidades; distensión del abdomen sin cintura; extenso depósito de grasa abdominal.",
              imageLink:
                "https://lh3.googleusercontent.com/qNzvauT_7r-1Fl8oagMCbPLinR4f_u27Cq3nTrpuQ2YeTNSatO8IkAoJWhWubKxJgmbR2xZAmSWcq9EmifsCwtfBbtvNLNUYaq297gfsCz2_eN2edDHvndJdhMojtXGd63CYg1nOMQ=w2400",
            },
          ],
          showLabel: true,
        },
      ],
    },
    {
      name: "page6",
      elements: [
        {
          type: "imagepicker",
          name: "color-tooth",
          isRequired: true,
          requiredErrorText: " ",
          title: {
            es: "¿A qué fotografia se le parecen más los dientes de {name}?",
          },
          choices: [
            {
              value: "tooth1",
              imageLink:
                "https://lh3.googleusercontent.com/hPawo7-aOv2srsJ_m5N1Yb6qmk0-VA1KdSwQqm621dJSt9neHtoW7JLN1SJpE1DlOyfNXtJ3UIg8754SbHZV71J37y1ZWoniNEVF35CIh3vgLFaeESMwnvZVXty78mDRLe4mL8MkiQ=s306-p-k",
            },
            {
              value: "tooth2",
              imageLink:
                "https://lh3.googleusercontent.com/mp9Up1hwQAzjjMIv0VIuzD5PhbrV4yG6093oAcl8Z7a8AmxJXNu2BgXpu3F50jg6Q9_00qYnRmDVwNYm-4s0R7HWn_rT-M-b8VBig7Ey2K-0X6R9ZxBteghWJzDkp2whHNAKBCaBLA=s306-p-k",
            },
            {
              value: "tooth3",
              imageLink:
                "https://lh3.googleusercontent.com/-wDvfFGWNp4cuo9e9LoFw9jFAH0pgXoIrY5Cugm4UvF-bSBMM36uQZojosoH3t8uuMDh3UL060d6_zBdE1ywN4eshYKjB7IXvOSZ6o6Jbc1E2OdgjZZUwbpffwGzexQYb27e8yMJrg=s306-p-k",
            },
          ],
          imageWidth: 150,
          imageHeight: 150,
        },
        {
          type: "dropdown",
          name: "less-tooth",
          title: "¿Le falta algún diente a {name}?",
          choices: ["si", "no"],
          hasOther: true,
        },
      ],
      navigationButtonsVisibility: "show",
    },
    {
      name: "page7",
    },
  ],
  triggers: [
    {
      type: "complete",
      expression:
        "{q03} = ['item1', 'item2'] and {q05} empty and {question1} = 'panda'",
    },
  ],
  showPageTitles: false,
  showQuestionNumbers: "off",
  questionErrorLocation: "bottom",
  showProgressBar: "top",
  progressBarType: "buttons",
  pagePrevText: "Anterior",
  pageNextText: "Siguiente",
  completeText: {
    es: "Ver Resultado",
  },
  widthMode: "responsive",
};

export default data;
