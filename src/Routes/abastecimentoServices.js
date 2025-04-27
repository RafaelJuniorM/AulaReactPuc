import { db } from "../database/db";

export async function inserirAbastecimento(abastecimento) {
  try {
    await db.runAsync(
      `INSERT INTO abastecimento (tipo, data, preco, valor, odometro) VALUES (?, ?, ?, ?, ?);`,
      [
        abastecimento.tipo,
        abastecimento.data,
        abastecimento.preco,
        abastecimento.valor,
        abastecimento.odometro,
      ]
    );
  } catch (error) {
    console.error("Erro ao inserir abastecimento:", error);
  }
}

export async function listarAbastecimentos() {
  try {
    const abastecimentos = await db.getAllAsync(
      "SELECT * FROM abastecimento;"
    );
    return abastecimentos;
  } catch (error) {
    console.error("Erro ao buscar abastecimentos:", error);
    return [];
  }
}

export async function atualizarAbastecimento(id, abastecimento) {
  try {
    await db.runAsync(
      `UPDATE abastecimento SET tipo=?, data=?, preco=?, valor=?, odometro=? WHERE id=?;`,
      [
        abastecimento.tipo,
        abastecimento.data,
        abastecimento.preco,
        abastecimento.valor,
        abastecimento.odometro,
        id,
      ]
    );
  } catch (error) {
    console.error("Erro ao atualizar abastecimento:", error);
  }
}

export async function deletarAbastecimento(id) {
  try {
    await db.runAsync("DELETE FROM abastecimento WHERE id=?;", [id]);
  } catch (error) {
    console.error("Erro ao deletar abastecimento:", error);
  }
}
