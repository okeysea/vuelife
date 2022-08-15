COMMON_COMPOSE=docker-compose -f docker-compose.yml

#####################################################
# Cluster
#####################################################
.PHONY: provision build up upd down downall
provision: yarninstall

build:
	${COMMON_COMPOSE} build

up:
	${COMMON_COMPOSE} up

upd:
	${COMMON_COMPOSE} up -d

down:
	${COMMON_COMPOSE} down

downall:
	${COMMON_COMPOSE} down --rmi all --volumes --remove-orphans

#####################################################
# Nodejs
#####################################################
.PHONY: yarninstall nodesh
yarninstall:
	${COMMON_COMPOSE} run --rm nodejs yarn install

nodesh:
	${COMMON_COMPOSE} run --rm nodejs ash


#####################################################
# Misc
#####################################################
# Fix permission
fixperm:
	sudo chown -R $(shell whoami):$(shell whoami) .
