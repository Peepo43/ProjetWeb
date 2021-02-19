#!/bin/bash


message=$2

if [ $# -lt 1 ] 
then
	echo -e "Nombre de parametre(s) incorrect \n"
	echo -e "Utilisation ./git.sh \$1 [\$1:Message du commit] \n"
	exit 1;
fi 

echo -e "Repertoire : projetWeb/ \n"
git pull
git status
git add *
git commit -m "$message"
git push
git status


