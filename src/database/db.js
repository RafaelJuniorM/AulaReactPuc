// RESPONSAVEL POR CRIAR E ADMINISTRAR O BD 
import * as SQLite from 'expo-sqlite';

// cria ou abre o BD
export const db = SQLite.openDatabaseSync('abastecimento.db');

// inicialização da tabela
export async function createTable(){
  try{
        await db.runAsync(
            `CREATE TABLE IF NOT EXISTS abastecimento (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            tipo INTEGER NOT NULL,
            data TEXT NOT NULL,
            preco REAL NOT NULL,
            valor REAL NOT NULL,
            odometro REAL NOT NULL);`
        );
        console.log("Tabela abastecimento criada com sucesso")
    }catch (error){
        console.error("Erro ao criar tabela:", error);
    }
}
