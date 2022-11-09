/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, SafeAreaView} from 'react-native'
import ExampleComponent1 from './components/ExampleComponent1'
import ExampleComponent2 from './components/ExampleComponent2' 
import ExampleComponent3 from './components/ExampleComponent3'
import ExampleComponent4 from './components/ExampleComponent4'
import ExampleComponent5 from './components/ExampleComponent5'
import ExampleComponent6 from './components/ExampleComponent6'
import ExampleComponent7 from './components/ExampleComponent7'
import ExampleComponent8 from './components/ExampleComponent8'
import {ExampleComponent9, ExampleComponent10} from './components/ExampleComponent9'

const loremIpsum = `
orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque varius quam ut lectus luctus, non tincidunt mi hendrerit. Fusce ullamcorper eget mi sed rutrum. Aliquam id mauris semper, suscipit elit et, tempus purus. Nulla eget purus sed elit iaculis ultrices. Integer accumsan vitae enim sed rutrum. Proin lorem dolor, consectetur vel ipsum quis, faucibus tempus mauris. Nunc tempor ligula ac diam laoreet commodo. Vivamus ornare, nulla vel mollis efficitur, mauris velit fermentum massa, ac dapibus ipsum erat at nisi. Suspendisse euismod augue fringilla, ultricies urna vitae, tempus diam. Vivamus sit amet eleifend nibh. Curabitur sed bibendum eros, at ultricies turpis. Sed odio quam, dapibus quis vehicula ac, elementum in mauris. Sed viverra euismod lorem, at suscipit purus tempor nec. Curabitur vel finibus ante. Suspendisse id viverra leo.
Nulla aliquet purus ut rutrum molestie. Nunc accumsan odio quis purus viverra, eget mollis velit lacinia. Nam risus eros, tincidunt sed velit non, eleifend iaculis nunc. Vivamus nec tempor sem. Phasellus suscipit, enim nec tristique luctus, quam nibh tincidunt massa, id pellentesque lorem quam sit amet risus. Maecenas pretium magna quis odio lacinia semper. Aliquam auctor mattis nunc eu ullamcorper. Integer at metus ligula. Sed commodo pharetra mauris eget euismod. In hac habitasse platea dictumst. Phasellus lacus libero, congue et ante ac, malesuada aliquet dolor.

Fusce ex velit, efficitur ut elementum vitae, tempus ut nulla. Mauris in nulla gravida, imperdiet odio ut, commodo odio. Nullam nec scelerisque urna. Nullam in dapibus odio. Nam quam risus, condimentum ac malesuada non, elementum in felis. Cras vel purus eleifend, molestie lectus non, rutrum est. Phasellus vel ligula semper, blandit purus non, sollicitudin diam. Ut volutpat feugiat turpis, nec tempus nisl vehicula at. Cras aliquam eget ipsum vitae euismod. Fusce non dolor nisl. Pellentesque eget nulla turpis.

Phasellus ut fringilla elit. Suspendisse vehicula est pulvinar suscipit lacinia. Aenean in sagittis lacus, id pellentesque risus. Morbi metus tellus, consequat sed feugiat at, fermentum at tortor. Pellentesque sodales quis ligula ac euismod. Quisque dapibus eget dolor eu lobortis. Ut at tempor tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Aliquam erat volutpat. Nulla mollis porta rhoncus. Sed faucibus augue quis nibh auctor, sed commodo enim ullamcorper. Ut a dui urna. Fusce ligula nisi, sodales in tincidunt a, sagittis quis lacus. Nam facilisis non tortor et ultrices. Ut quis erat fringilla, tincidunt dui dictum, pretium nisl. Donec congue hendrerit lectus, non interdum mi laoreet nec. Quisque vulputate mattis auctor. Nunc ultrices metus quis facilisis suscipit. Donec eget quam diam.
`

export default class App extends React.Component{
  render(){
    return (
      <SafeAreaView>
        {/* Simple Component */}
        {/* <ExampleComponent1 /> */}
        {/* Simple Component with props */}
        {/* <ExampleComponent2 message="Ola Lais" /> */}
        {/* <ExampleComponent2 message="Ola Adhan" /> */}
        {/* Simple Component using View */}
        {/* <ExampleComponent3 message={loremIpsum}/> */}
        {/* Simple Component with Scroll View */}
        {/* <ExampleComponent4 message={loremIpsum} /> */}
        {/* Simple Component with an image view */}
        {/* <ExampleComponent5 /> */}
        {/* Simple Component with state interaction */}
        {/* <ExampleComponent6 />
        <ExampleComponent6 /> */}
        {/* Component lifecycle example */}
        {/* <ExampleComponent7 /> */}
        {/* Example component with react hooks */}
        {/* <ExampleComponent8 name="Filipe" age={24} /> */}
        <ExampleComponent9 />
        <ExampleComponent10 />
        <ExampleComponent10 />
      </SafeAreaView>
    )
  }
}