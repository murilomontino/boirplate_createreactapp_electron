import React, {useContext, createContext} from 'react'

const ContextExample = createContext()

const ContextExampleProvider = ({ children }) => {
	

	return (
		<ContextExample.Provider
			value={{
		
			}}
		>
			{children}
		</ContextExample.Provider>
	)
}

export const useExample = () => {
	const context = useContext(ContextExample)

	return {
		...context
	}
}

export default ContextExampleProvider
