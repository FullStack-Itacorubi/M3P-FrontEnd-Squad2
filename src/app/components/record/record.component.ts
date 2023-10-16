import { Component } from '@angular/core';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {
  //fetch patients from API
  patients = [
    {
      "name": "Elza Clarice Mariana Lima",
      "age": 36,
      "email": "elzaclaricelima@outlook.com.br",
      "phone": "(96) 9 8603-3710",
      "healthplan": "amarelo"
    },
    {
      "name": "Thiago Thiago Mateus da Cruz",
      "age": 56,
      "email": "thiago_dacruz@humanfit.com.br",
      "phone": "(68) 9 9139-4463",
      "healthplan": "verde"
    },
    {
      "name": "Hadassa Antonella Monteiro",
      "age": 45,
      "email": "hadassa.antonella.monteiro@semco.com.br",
      "phone": "(85) 9 8150-2971",
      "healthplan": "preto"
    },
    {
      "name": "Tatiane Daniela Catarina Dias",
      "age": 56,
      "email": "tatiane.daniela.dias@tafeta.com.br",
      "phone": "(96) 9 8583-0453",
      "healthplan": "roxo"
    },
    {
      "name": "Isabella Carolina Amanda Brito",
      "age": 46,
      "email": "isabella-brito88@rafaeladson.com",
      "phone": "(71) 9 8649-1064",
      "healthplan": "vermelho"
    },
    {
      "name": "Lucca Cauê Almada",
      "age": 54,
      "email": "lucca_caue_almada@puenteimoveis.com.br",
      "phone": "(21) 9 9404-1398",
      "healthplan": "verde"
    },
    {
      "name": "Allana Laura Sarah Araújo",
      "age": 47,
      "email": "allana.laura.araujo@danielstrauch.com",
      "phone": "(27) 9 8144-2390",
      "healthplan": "azul"
    },
    {
      "name": "Thomas André Pedro Alves",
      "age": 62,
      "email": "thomas.andre.alves@sistectecnologia.com.br",
      "phone": "(68) 9 8955-4338",
      "healthplan": "azul"
    },
    {
      "name": "Valentina Luciana Caroline Campos",
      "age": 42,
      "email": "valentina_campos@tortasecreta.com",
      "phone": "(62) 9 9641-3682",
      "healthplan": "amarelo"
    },
    {
      "name": "Kaique Roberto Galvão",
      "age": 20,
      "email": "kaiquerobertogalvao@lojasrayton.com",
      "phone": "(82) 9 9757-0717",
      "healthplan": "preto"
    },
    {
      "name": "Eloá Mariana Assis",
      "age": 35,
      "email": "eloa-assis94@lphbrasil.com.br",
      "phone": "(43) 9 9553-0659",
      "healthplan": "verde"
    }]
}
