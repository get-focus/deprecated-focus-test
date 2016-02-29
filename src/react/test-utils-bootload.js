import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiSubset from 'chai-subset';

chai.use(chaiSubset);
chai.use(sinonChai);
// Propagate to global the test
global.expect = chai.expect;
global.sinon = sinon;
// material
global.componentHandler = {upgradeElement: function(){}};
