// +--------------+-------------+------+-----+---------+-------+
// | Field        | Type        | Null | Key | Default | Extra |
// +--------------+-------------+------+-----+---------+-------+
// | movieid      | int         | YES  | UNI | NULL    |       |
// | moviename    | varchar(30) | YES  |     | NULL    |       |
// | heroname     | varchar(30) | YES  |     | NULL    |       |
// | heroine      | varchar(30) | YES  |     | NULL    |       |
// | releasedate  | date        | YES  |     | NULL    |       |
// | language     | varchar(15) | YES  |     | NULL    |       |
// | movielength  | int         | YES  |     | NULL    |       |
// | movietype    | varchar(25) | YES  |     | NULL    |       |
// | productionid | int         | YES  |     | NULL    |       |
// +--------------+-------------+------+-----+---------+-------+
// 9 rows in set (0.02 sec)

// mysql> desc production;
// +----------------+-------------+------+-----+---------+-------+
// | Field          | Type        | Null | Key | Default | Extra |
// +----------------+-------------+------+-----+---------+-------+
// | productionid   | int         | YES  | UNI | NULL    |       |
// | productionname | varchar(30) | YES  |     | NULL    |       |
// | address        | varchar(40) | YES  |     | NULL    |       |
// | dateofstarted  | year        | YES  |     | NULL    |       |
// | ownername      | varchar(20) | YES  |     | NULL    |       |
// +----------------+-------------+------+-----+---------+-------+



//1. SELECT productions.productionid, productionname, count(Productionname) from movie INNER JOIN productions WHERE movie.productionsid=productions.productionid group by movie.Productionid ; 
// 2.select p.productionname, p.ownername from production p inner join movie m where m.productionid= p.productionid group by m.productionid having count(productionname)>2;

// 4 select m.moviename, m.heroname, p.productionname from movie m inner join production p on m.productionid= p.productionid where p.ownername='Subaskaran';
// 5select moviename, heroname from movie where productionid like '%82';
// 7 select p.productionname, p.ownername from production p inner join movie m on p.productionid=m.productionid where not m.language ='hindi';
