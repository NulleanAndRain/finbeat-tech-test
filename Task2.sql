-- 1
SELECT c.ClientName, COUNT(cs.Id) AS 'ContactsCount'
FROM Clients c
LEFT JOIN ClientContacts cs ON c.Id = cs.ClientId
GROUP BY c.ClientName

-- 2
SELECT c.ClientName
FROM Clients c
LEFT JOIN ClientContacts cs ON c.Id = cs.ClientId
GROUP BY c.ClientName
HAVING COUNT(cs.Id) > 2