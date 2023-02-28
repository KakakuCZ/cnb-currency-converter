.NOPARALLEL .PHONY .SILENT: all
all:
	@yarn
	@yarn build
	@yarn prod
