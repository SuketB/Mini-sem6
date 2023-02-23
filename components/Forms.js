import React from 'react'
import styles from './Forms.module.css'

export default class Forms extends React.Component {
    constructor() {
        super()
        this.state = {
            user: 'abc',
            password: 'dcf'
        }
    }

    submit() {
        console.warn(this.state)
    }

    render() {
        return (
            <div className={styles['form-container']}>
                <h1 className={styles['form-title']}> SPI Flash Extractor</h1>

                <h2 className={styles['form-subtitle']}> Power option</h2>

                <label className={styles['form-label']}>
                    PSU Power
                    <input
                        name="PSU Power"
                        type="checkbox"
                        className={styles['form-checkbox']}
                    />
                </label>
                <br />
                <label className={styles['form-label']} >
                    PI Power
                    <input
                        name="PI Power"
                        type="checkbox"
                        className={styles['form-checkbox']}

                    />
                </label>

                <label className={styles['form-label']}>
                    SPI speed:
                    <input
                        type="number"
                        name="speed"
                        placeholder='Default is set to 4096'
                        min="4096"
                        onChange={(e) => { this.setState({ user: e.target.value }) }}
                        className={styles['form-input']}
                    />
                </label>
                <button onClick={() => this.submit()} className={styles['form-button']}>Probe Attached Flash</button>
                <br />
                <br />
                <br />
                <label className={styles['form-label']}>
                    File-Name:
                    <input
                        type="text"
                        name="file"
                        onChange={(e) => { this.setState({ password: e.target.value }) }}
                        className={styles['form-input']}
                    />
                </label>

                <button onClick={() => this.submit()} className={styles['form-button']}>Extract Firmware</button>
            </div>
        )
    }
}
