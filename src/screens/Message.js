import React from 'react'
import {Text, StyleSheet, View, TouchableHighlight, Alert} from 'react-native'
import {LoginButton, AccessToken, ShareDialog} from 'react-native-fbsdk'

const SHARE_LINK_CONTENT = {
	contentType: 'link',
	contentUrl: 'https://www.facebook.com/'
}

export default function MessageScreen() {
	async function shareLinkWithShareDialog() {
		const canShow = await ShareDialog.canShow(SHARE_LINK_CONTENT)
		if (canShow) {
			try {
				const {isCancelled, postId} = await ShareDialog.show(SHARE_LINK_CONTENT)
				if (isCancelled) {
					Alert.alert('Share cancelled')
				} else {
					Alert.alert('Share success with postId: ' + postId)
				}
			} catch (error) {
				Alert.alert('Share fail with error: ' + error)
			}
		}
	}

	return (
		<View style={styles.container}>
			<Text> Message </Text>

			<LoginButton
				onLoginFinished={(error, data) => {
					Alert.alert(JSON.stringify(error || data, null, 2))
				}}
			/>
			<TouchableHighlight onPress={shareLinkWithShareDialog}>
				<Text style={styles.shareText}>Share link with ShareDialog</Text>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
