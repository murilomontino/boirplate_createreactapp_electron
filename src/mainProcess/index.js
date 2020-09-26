const { ipcMain, BrowserWindow } = require('electron')

module.exports = (mainWindow) => {
  
	
	ipcMain.on('@comunication/REQUEST', async (event, message) => {
		try{
			const { title, ...body } = message
			
      
		} catch (error) { return }
    
	})

  
	// ================================================================================================
	// Eventos do MenuTitleBar 

	ipcMain.on('@window/REQUEST', async (event, message) => {
		try {
			const {title} = message
			const mainWindow = BrowserWindow.getFocusedWindow()

			if(title === 'maximize'){
				if(mainWindow.isMaximized()){
					mainWindow.unmaximize()
				} else
					mainWindow.maximize()
			}else
				mainWindow[title]()
  
		} catch (error) {
			console.error(error)
		}
  
	})

	
}






