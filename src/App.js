import './App.css'
import Error from './components/UI/Error'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './components/login/login'
import MainPage from './components/login/MainPage'
import Add from './components/todo/Add'
import Loading from './components/UI/Loading'
import { useSelector } from 'react-redux'
function App() {
	const loading = useSelector((state) => state.ui.isLoading)
	return (
		<div className='App'>
			{loading && <Loading />}
			{/* <Modal/> */}
			<Routes>
				<Route
					path='/'
					element={<Navigate replace to={'/MainPage'} />}
				/>

				<Route path='/MainPage' element={<MainPage />} />

				<Route path='/Login' replace element={<Login />} />

				<Route path='/Trello' element={<Add />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</div>
	)
}

export default App
