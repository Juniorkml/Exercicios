/* Exercício 1 */

/* inserindo aluno */
insert into Aluno (Id, Nome) values (1, 'Lucas');

/* inserindo responsáveis */
insert into Responsavel (Id, Nome) values (1, 'Pablo');
insert into Responsavel (Id, Nome) values (2, 'Brenda');

/* associação aluno a responsáveis */
insert into Parentesco (IdResponsavel, IdAluno, Parentesco) values (1, 1, 'Pai');
insert into Parentesco (IdResponsavel, IdAluno, Parentesco) values (2, 1, 'Mae');


/* Exercício 2 */


select A.nome as 'Aluno', 
       ResponsavelUm.nome as 'Responsável',
       ResponsavelUm.Parentesco as 'Parentesco'
       ResponsavelDois.nome as 'Responsável',
       ResponsavelDois.Parentesco as 'Parentesco'
from Aluno A,
    (
        select R.nome, P.Parentesco
        from Responsavel R
        inner join Parentesco P on R.id = P.IdResponsavel
        where P.IdAluno = A.id
        order by id
        limit 0, 1
    ) as ResponsavelUm,
    (
        select R.nome, P.Parentesco
        from Responsavel R
        inner join Parentesco P on R.id = P.IdResponsavel
        where P.IdAluno = A.id
        order by id
        limit 1, 1
    ) as ResponsavelDois


/* Exercício 3 */
select *
from Aluno A
inner join Parentesco P on A.id = P.IdAluno
inner join Responsavel R on R.id = R.IdResponsavel