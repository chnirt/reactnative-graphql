import React, {useContext, useEffect, useState} from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native'
import {primaryColor} from '../theme'

import {CTX} from '../tools/context'

export default function ProfileScreen() {
	const [user, setUser] = useState(null)

	const authContext = useContext(CTX)
	const {_logout} = authContext

	function _onLogout() {
		// NOTE: context
		_logout()
	}

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TouchableOpacity style={styles.button} onPress={_onLogout}>
					<Text style={styles.buttonText}>Log out</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	form: {
		marginBottom: 48,
		marginHorizontal: 30
	},
	button: {
		marginHorizontal: 30,
		backgroundColor: primaryColor,
		borderRadius: 4,
		height: 52,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonText: {
		color: '#fff',
		fontWeight: '500'
	}
})
