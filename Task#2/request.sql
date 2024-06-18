/* Чистим кэши для более точного измерения */
DBCC FREEPROCCACHE;
DBCC DROPCLEANBUFFERS;

/* Включаем замер статистиики*/
SET STATISTICS TIME ON;
SET STATISTICS IO ON;

/*
    НЕ ДОБАВЛЯЛ ИНДЕКСЫ ДЛЯ ЧИСТОТЫ ЗАМЕРА!
    Если это разрешено можно раскоментить следующие строки:

    CREATE INDEX idx_collaborators_subdivision_id ON collaborators (subdivision_id);
    CREATE INDEX idx_collaborators_age ON collaborators (age);
    CREATE INDEX idx_subdivisions_parent_id ON subdivisions (parent_id);
*/

/* Проходим рекурсией по всем подрзаделениям и собираем все которые нужны (индексация от корня = 0)*/
WITH RequiredSubdivisions AS (
/* Базовая выборка - все подразделения первого уровня которые подчинены подразделению в котором работает нужный сотрудник (за вычетом двух исключаемых) */
SELECT 
	id,
	parent_id,
	name,
	1 AS level
FROM subdivisions 
WHERE parent_id = (SELECT subdivision_id FROM collaborators WHERE id = 710253)
	AND id NOT IN (100055, 100059)
/* Рекурсивно обходим выборку и выбираем все подходящие (опять, исключая 2 айди)*/
UNION ALL
SELECT 
	s.id,
	s.parent_id,
	s.name,
	req.level + 1
FROM 
	subdivisions AS s
INNER JOIN
	RequiredSubdivisions AS req ON s.parent_id = req.id
WHERE 
	s.id NOT IN (100055, 100059)
)
/* Соединяем сотрудников и искомые подразделения и выделяем фильтруя по возрасту (в группировке я также добавил id для удобства работы с результатом) */
SELECT 
	c.id,
	c.name,
	req.name AS sub_name,
	req.id AS sub_id,
	req.level AS sub_level,
	(SELECT COUNT(*) FROM collaborators WHERE subdivision_id = req.id) AS colls_count
FROM collaborators AS c
INNER JOIN
	RequiredSubdivisions AS req ON c.subdivision_id = req.id
WHERE
	c.age < 40
ORDER BY
	req.level ASC, 
	id ASC;

/* Отключаем замер статистики*/
SET STATISTICS TIME OFF;
SET STATISTICS IO OFF;