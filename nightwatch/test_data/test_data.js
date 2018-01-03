module.exports = {
    tempTest: {
        wid: '1234567890',
        wgt: '200',
        output: '1234567890........200.........'
    },
    enterTab: {
        goodData: {
            input: {
                hdr: '123456789',
                mke: 'M-E',
                ori: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '',
                ols: '',
                old: '',
                lic: '',
                lis: '',
                lid: ''
            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                queryOutput: '123456789.M-E.CHI1234SI.Harry Dresden.M.W.607.200.Brown.Arson.05022016......'
            }
        },
        badData: {
            input: {
                hdr: '123456789',
                mke: 'M-E',
                ori: 'CHI1234SI',
                nam: 'Harry Dresden',
                sex: 'M',
                rac: 'W',
                hgt: '607',
                wgt: '200',
                hai: 'Brown',
                off: 'Arson',
                dow: '05022016',
                oln: '12345',
                ols: '',
                old: '',
                lic: '',
                lis: '',
                lid: ''
            },
            output: {
                header: 'Errors Received',
                errorList: {
                    oln: `If one of the following are present, all must be present: Drivers License, DL State, DL Expiration Date.`
                },
                queryTitle: 'No results generated due to error.',
                queryOutput: ''
            }
        }
    },
    modifyTab: {
        goodData: {
            input: {
                wid: '1234567890',
                hdr: '',
                mke: '',
                ori: '',
                nam: 'Harry Dresden',
                sex: '',
                rac: '',
                hgt: '',
                wgt: '',
                hai: '',
                off: '',
                dow: '',
                oln: '',
                ols: '',
                old: '',
                lic: '',
                lis: '',
                lid: ''
            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                queryOutput: '1234567890....Harry Dresden.............'
            }
        },
        badData: {
            input: {
                wid: '1234567890',
                hdr: '',
                mke: '',
                ori: '',
                nam: '',
                sex: '',
                rac: '',
                hgt: '',
                wgt: '',
                hai: '',
                off: '',
                dow: '',
                oln: '',
                ols: '',
                old: '',
                lic: '',
                lis: '',
                lid: ''
            },
            output: {
                header: 'Errors Received',
                errorList: '',
                //To be updated once changes are made so that the test will run properly, as it will not currently show an error message
                queryTitle: 'No results generated due to error.',
                queryOutput: ''
            }

        }
    },
    cancelTab: {
        goodData: {
            input: {
                wid: '1234567890',
                rfc: 'Because I want to',
                doc: '01022018'
            },
            output: {
                header: 'Valid',
                errorList: {},
                queryTitle: 'Assembled Query:',
                queryOutput: '1234567890.Because I want to.01022018'
            }
        },
        badData: {
            input: {
                wid: '1234567890',
                rfc: '',
                doc: '01022018',
                rfcInvalid: 'I'
            },
            output: {
                header: 'Errors Received',
                errorList: {
                    rfc: `The field named "Reason for Cancellation" must be included.`,
                    rfcInvalid: `The "Reason for Cancellation" field should be between 5 and 150 characters long`
                },
                queryTitle: 'No results generated due to error.',
                queryOutput: ''
            }
        }
    }
}