import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, Platform, Alert } from 'react-native';

export default function FeedbackForm() {
    const [chat, onChangeChat] = React.useState();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "position" : "height"}
            style={styles.container}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
            <ScrollView contentContainerStyle={styles.scrollViewContent} keyboardDismissMode='on-drag'>
                <Text style={styles.heading}>Feedback Form</Text>
                <Text style={styles.infoText}>Please provide your feedback below:</Text>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Your feedback"
                    multiline={true}
                    autoCapitalize="words"
                    value={chat}
                    onChangeText={onChangeChat}
                    keyboardShouldPersistTaps="handled"
                    keyboardType={'default'}
                    onFocus={() => {
                        Alert.alert('Feedback is focused');
                    }}
                    onBlur={() => {
                        Alert.alert('Feedback is blurred');
                    }}
                    clearButtonMode='always'
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#495E57',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 16,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    scrollView: {
        padding: 20,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 20,
    },
    inputBox: {
        fontSize: 16,
        height: 50,
        padding: 10,
        fontSize: 16,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#EDEFEE',
        backgroundColor: '#F4CE14',
    },
    messageInput: {
        height: 100,
        padding: 10,
        fontSize: 16,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    infoSection: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginBottom: 20,
    },
});