/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Créer un objet row
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insérer la ligne et récupérer l'ID
const newRowID: RowID = CRUD.insertRow(row);
console.log(`New row ID: ${newRowID}`);

// Créer une version mise à jour avec age
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Mettre à jour la ligne
CRUD.updateRow(newRowID, updatedRow);

// Supprimer la ligne
CRUD.deleteRow(newRowID);
