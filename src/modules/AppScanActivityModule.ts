interface IAppScanActivityModule {
    startScan: () => Promise<String>
}

import { NativeModules } from 'react-native';
const { AppScanActivityModule } = NativeModules;
export default AppScanActivityModule as IAppScanActivityModule;