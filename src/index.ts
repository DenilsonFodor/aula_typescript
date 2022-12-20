import { buscaAlunoPorNota, filtraAlunoPorNota, listaDeAlunos, montaTurma, somaNotas, tirarPontoTurma } from "./exemplos/arrays";
import { exemploIfLoop, exemploTipos } from "./exemplos/primitivos";

const turma = montaTurma();

const novaTurma = filtraAlunoPorNota(turma, 8);

console.log(novaTurma);

console.log(buscaAlunoPorNota(turma, 10));

console.log(tirarPontoTurma(turma, 3));



