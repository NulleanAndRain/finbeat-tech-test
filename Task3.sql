WITH partition_over_id AS ( 
	SELECT Id, Dt AS Sd, LEAD(Dt) OVER (PARTITION BY Id ORDER BY Dt ASC) AS Ed 
	FROM Dates)
SELECT Id, Sd, Ed 
FROM partition_over_id
WHERE Ed IS NOT NULL