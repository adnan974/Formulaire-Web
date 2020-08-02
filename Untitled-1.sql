CREATE
DEFINER=`root`@`localhost`
TRIGGER `mydb`.`tag_tache_has_tache_AFTER_DELETE`
AFTER DELETE ON `mydb`.`tag_tache_has_tache`
FOR EACH ROW
BEGIN
SET @id_tag_tache = OLD.TAG_TACHE_Id_Tag_Tache;
SET @id_tache = OLD.TACHE_Id_Tache;
SET @nb_ligne_restante = (SELECT COUNT(*) FROM tag_tache_has_tache WHERE tag_tache_has_tache.TAG_TACHE_Id_Tag_Tache =  @id_tag_tache AND tag_tache_has_tache.TACHE_Id_Tache != @id_tache );
IF @nb_ligne_restante = 0 THEN
    DELETE FROM tag_tache
    WHERE Id_Tag_Tache = @id_tag_tache; 
END IF;
END