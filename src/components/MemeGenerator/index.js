import {Component} from 'react'

import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  FormAndMemeContainer,
  MemeContainer,
  TextContent,
  MemeGeneratorForm,
  CustomLabel,
  CustomInput,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    backgroundImageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    backgroundImageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onChangeBackgroundImage = event => {
    this.setState({backgroundImageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSizeOptionID = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      backgroundImageUrl: backgroundImageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  renderMemeGeneratorForm = () => {
    const {
      activeFontSizeOptionId,
      backgroundImageUrlInput,
      topTextInput,
      bottomTextInput,
    } = this.state

    return (
      <MemeGeneratorForm onSubmit={this.onGenerateMeme}>
        <CustomLabel htmlFor="backgroundImageUrl">Image URL</CustomLabel>
        <CustomInput
          type="text"
          id="backgroundImageUrl"
          value={backgroundImageUrlInput}
          onChange={this.onChangeBackgroundImage}
          placeholder="Enter the Image URL"
        />
        <CustomLabel htmlFor="topText">Top Text</CustomLabel>
        <CustomInput
          type="text"
          id="topText"
          value={topTextInput}
          onChange={this.onChangeTopTextInput}
          placeholder="Enter the Top Text"
        />
        <CustomLabel htmlFor="topText">Bottom Text</CustomLabel>
        <CustomInput
          type="text"
          id="bottomText"
          value={bottomTextInput}
          onChange={this.onChangeBottomTextInput}
          placeholder="Enter the Bottom Text"
        />
        <CustomLabel htmlFor="select">Font Size</CustomLabel>
        <CustomSelect
          id="select"
          value={activeFontSizeOptionId}
          onChange={this.onChangeFontSizeOptionID}
        >
          {fontSizesOptionsList.map(eachOption => (
            <CustomOption key={eachOption.optionId} value={eachOption.optionId}>
              {eachOption.displayText}
            </CustomOption>
          ))}
        </CustomSelect>
        <GenerateButton type="submit">Generate</GenerateButton>
      </MemeGeneratorForm>
    )
  }

  renderMeme = () => {
    const {
      backgroundImageUrl,
      topText,
      bottomText,
      activeFontSizeId,
    } = this.state

    return (
      <MemeContainer data-testid="meme" backgroundImage={backgroundImageUrl}>
        <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
        <TextContent activeFontSizeId={activeFontSizeId}>
          {bottomText}
        </TextContent>
      </MemeContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormAndMemeContainer>
            {this.renderMeme()}
            {this.renderMemeGeneratorForm()}
          </FormAndMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator

// import {Component} from 'react'
// import {
//   AppContainer,
//   MemeGeneratorContainer,
//   Heading,
//   FormAndMemeContainer,
//   MemeContainer,
//   TextContent,
//   FormInputContainer,
//   CustomLabel,
//   CustomInput,
//   CustomSelect,
//   CustomOption,
//   CustomButton,
// } from './styledComponents'

// const fontSizesOptionsList = [
//   {
//     optionId: '8',
//     displayText: '8',
//   },
//   {
//     optionId: '12',
//     displayText: '12',
//   },
//   {
//     optionId: '16',
//     displayText: '16',
//   },
//   {
//     optionId: '20',
//     displayText: '20',
//   },
//   {
//     optionId: '24',
//     displayText: '24',
//   },
//   {
//     optionId: '28',
//     displayText: '28',
//   },
//   {
//     optionId: '32',
//     displayText: '32',
//   },
// ]
// // Write your code here
// class MemeGenerator extends Component {
//   state = {
//     backgroundImageUrlInput: '',
//     backgroundImageUrl: '',
//     topTextInput: '',
//     topText: '',
//     bottomTextInput: '',
//     bottomText: '',
//     activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
//     activeFontSizeId: '',
//   }

//   onGenerateMeme = event => {
//     event.preventDefault()
//     const {
//       backgroundImageUrlInput,
//       topTextInput,
//       bottomTextInput,
//       activeFontSizeOptionId,
//     } = this.state

//     this.setState({
//       backgroundImageUrl: backgroundImageUrlInput,
//       topText: topTextInput,
//       bottomText: bottomTextInput,
//       activeFontSizeId: activeFontSizeOptionId,
//     })
//   }

//   onChangeImageUrl = event => {
//     this.setState({backgroundImageUrlInput: event.target.value})
//   }

//   onChangeTopText = event => {
//     this.setState({topTextInput: event.target.value})
//   }

//   onChangeBottomText = event => {
//     this.setState({bottomTextInput: event.target.value})
//   }

//   onChangeFontSize = event => {
//     this.setState({activeFontSizeOptionId: event.target.value})
//   }

//   renderInputForm = () => {
//     const {
//       backgroundImageUrlInput,
//       topTextInput,
//       bottomTextInput,
//       activeFontSizeOptionId,
//     } = this.state

//     return (
//       <FormInputContainer onSubmit={this.onGenerateMeme}>
//         <CustomLabel htmlFor="imageUrl">Image URL</CustomLabel>

//         <CustomInput
//           type="text"
//           id="imageUrl"
//           value={backgroundImageUrlInput}
//           onChange={this.onChangeImageUrl}
//           placeholder="Enter the Image URL"
//         />

//         <CustomLabel htmlFor="topText">Top Text</CustomLabel>

//         <CustomInput
//           type="text"
//           id="topText"
//           value={topTextInput}
//           onChange={this.onChangeTopText}
//           placeholder="Enter the Top Text"
//         />

//         <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>

//         <CustomInput
//           type="text"
//           id="bottomText"
//           value={bottomTextInput}
//           onChange={this.onChangeBottomText}
//           placeholder="Enter the Bottom Text"
//         />

//         <CustomLabel htmlFor="fontSize">Font Size</CustomLabel>

//         <CustomSelect
//           id="fontSize"
//           value={activeFontSizeOptionId}
//           onChange={this.onChangeFontSize}
//         >
//           {fontSizesOptionsList.map(each => (
//             <CustomOption key={each.optionId} value={each.optionId}>
//               {each.displayText}
//             </CustomOption>
//           ))}
//         </CustomSelect>

//         <CustomButton type="button">Generate</CustomButton>
//       </FormInputContainer>
//     )
//   }

//   renderMeme = () => {
//     const {
//       backgroundImageUrl,
//       topText,
//       bottomText,
//       activeFontSizeId,
//     } = this.state

//     return (
//       <MemeContainer backgroundImage={backgroundImageUrl}>
//         <TextContent activeFontSizeId={activeFontSizeId}>{topText}</TextContent>
//         <TextContent activeFontSizeId={activeFontSizeId}>
//           {bottomText}
//         </TextContent>
//       </MemeContainer>
//     )
//   }

//   render() {
//     return (
//       <>
//         <AppContainer>
//           <MemeGeneratorContainer>
//             <Heading>Meme Generator</Heading>
//             <FormAndMemeContainer>
//               {this.renderInputForm()}
//               {this.renderMeme()}
//             </FormAndMemeContainer>
//           </MemeGeneratorContainer>
//         </AppContainer>
//       </>
//     )
//   }
// }
// export default MemeGenerator
