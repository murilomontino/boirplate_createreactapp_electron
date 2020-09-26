import React, { memo } from 'react'

import './styles.css'

import { ReactComponent as CloseIcon } from '../../assets/Icons/closeIcon.svg'
import { ReactComponent as MinusIcon } from '../../assets/Icons/minusIcon.svg'
import { ReactComponent as SquareIcon } from '../../assets/Icons/squareIcon.svg'

const { ipcRenderer } = window.require('electron')

const MenuTitleBar = () => {


	const Close = () => {
		ipcRenderer.send('@window/REQUEST', { title: 'close' })
	}

	const Minimize = () =>
		ipcRenderer.send('@window/REQUEST', { title: 'minimize' })

	const Maximize = () =>
		ipcRenderer.send('@window/REQUEST', { title: 'maximize' })

	return (
		<div className="title-bar">
			<div className="title-text"> Boirplate CreateReactApp Electron </div>
			<div className="title-bar-btns">
				<button  onClick={Minimize}>
					<MinusIcon className="icon-minus" />
				</button>
				<button onClick={Maximize}>
					<SquareIcon className="icon-square" />
				</button>
				<button onClick={Close}>
					{' '}
					<CloseIcon className="icon-close" />{' '}
				</button>
			</div>
		</div>
	)
}

export default memo(MenuTitleBar)
