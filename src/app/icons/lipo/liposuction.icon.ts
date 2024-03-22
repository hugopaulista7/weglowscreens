import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lipo-icon',
  template: `<svg
    [attr.fill]="fill"
    [attr.height]="height"
    [attr.width]="width"
    viewBox="0 0 511.999 511.999"
    xml:space="preserve"
  >
    <g>
      <g>
        <path
          d="M384.168,220.831c-0.063-0.129-0.133-0.256-0.196-0.385c-0.844-1.724-1.711-3.439-2.619-5.14
     c-0.236-0.443-0.494-0.878-0.733-1.319c-0.755-1.384-1.511-2.767-2.307-4.135c-0.551-0.946-1.139-1.877-1.709-2.814
     c-0.521-0.856-1.024-1.721-1.563-2.569c-1.135-1.79-2.306-3.566-3.515-5.324c-1.29-1.875-2.827-3.952-4.836-6.534
     c-0.001-0.001-0.002-0.002-0.002-0.004c-0.002-0.002-0.003-0.005-0.006-0.008c-1.339-1.717-2.752-3.481-4.203-5.292
     c-9.276-11.579-19.789-24.703-19.789-37.199c0-46.845,34.106-133.303,34.451-134.17c1.424-3.586,0.979-7.643-1.189-10.835
     C373.783,1.911,370.175,0,366.318,0H145.669c-3.857,0-7.465,1.911-9.631,5.104c-2.166,3.191-2.612,7.249-1.189,10.835
     c0.345,0.867,34.449,87.325,34.449,134.17c0,12.488-10.499,25.604-19.763,37.177c-1.456,1.82-2.877,3.595-4.224,5.322
     c-2.005,2.576-3.542,4.653-4.837,6.536c-1.206,1.752-2.375,3.523-3.508,5.309c-0.643,1.012-1.246,2.041-1.864,3.063
     c-0.469,0.775-0.956,1.541-1.411,2.321c-0.846,1.452-1.651,2.919-2.449,4.388c-0.193,0.356-0.402,0.707-0.593,1.063
     c-0.943,1.765-1.846,3.545-2.721,5.335c-0.03,0.063-0.064,0.123-0.094,0.186c-11.113,22.832-16.641,47.642-16.111,72.888
     l0.024,1.559c0.332,15.31,8.114,38.425,23.841,70.771l1.746,3.563c20.141,40.745,30.787,85.964,30.787,130.767
     c0,6.428,5.212,11.641,11.641,11.641h60.396c2.714,0,5.342-0.948,7.431-2.68l8.406-6.971l8.407,6.971
     c2.088,1.731,4.717,2.68,7.431,2.68h60.385c6.428,0,11.641-5.213,11.641-11.641c0-22.488,2.64-45.073,7.848-67.126
     c5.172-21.893,12.893-43.304,22.967-63.678c0.601-1.225,1.2-2.449,1.768-3.629c15.688-32.266,23.469-55.383,23.79-70.646
     l0.036-1.524c0.01-0.508-0.003-1.013,0.001-1.52c0-0.002,0-0.005,0-0.007c0-0.016,0-0.033,0-0.049
     C400.548,267.452,395.046,243.194,384.168,220.831z M162.49,23.282h187.009v0.001c-10.29,28.371-30.094,88.023-30.094,126.824
     c0,14.312,6.619,26.976,14.374,38.009H178.212c7.751-11.034,14.37-23.696,14.37-38.009c0-21.905-6.312-50.453-13.66-76.269h92.618
     c6.428,0,11.641-5.213,11.641-11.641s-5.213-11.641-11.641-11.641h-99.705C168.424,39.986,165.141,30.591,162.49,23.282z
      M244.36,481.744c0,0.003,0,0.007,0,0.01l-8.397,6.963h-44.777c-1.686-44.515-12.999-89.028-32.958-129.408l-1.747-3.565
     c-13.892-28.573-18.963-45.071-20.667-54.232c4.749-0.69,9.554-1.048,14.371-1.048c48.026,0,82.231,20.505,94.175,56.316V481.744z
      M355.486,355.788c-0.563,1.173-1.14,2.347-1.696,3.483c-10.837,21.917-19.16,44.999-24.738,68.609
     c-4.723,20.004-7.49,40.418-8.253,60.837h-44.764l-8.395-6.962c0-0.004,0-0.007,0-0.01V356.781
     c11.944-35.81,46.149-56.316,94.175-56.316c4.813,0,9.614,0.356,14.359,1.045C374.466,310.698,369.388,327.195,355.486,355.788z
      M361.819,277.18c-27.517,0-52.479,6.133-72.189,17.733c-13.933,8.2-25.289,19.169-33.631,32.347
     c-8.342-13.178-19.697-24.147-33.626-32.345c-19.71-11.602-44.673-17.733-72.189-17.733c-4.891,0-9.773,0.291-14.615,0.87
     c0.262-2.837,0.618-5.661,1.059-8.471c0.023-0.15,0.048-0.3,0.072-0.451c0.217-1.347,0.451-2.693,0.708-4.033
     c0.012-0.059,0.024-0.118,0.035-0.177c0.815-4.217,1.831-8.395,3.045-12.525c0.013-0.044,0.024-0.088,0.037-0.133
     c0.336-1.14,0.698-2.274,1.065-3.406c0.134-0.411,0.264-0.822,0.402-1.232c0.342-1.024,0.7-2.047,1.066-3.064
     c0.186-0.516,0.378-1.029,0.57-1.543c0.36-0.96,0.723-1.92,1.105-2.873c0.232-0.577,0.476-1.15,0.716-1.725
     c0.54-1.299,1.1-2.593,1.681-3.878c0.44-0.973,0.879-1.948,1.342-2.914c0.319-0.666,0.659-1.324,0.99-1.985
     c0.421-0.843,0.842-1.685,1.282-2.522c0.335-0.64,0.682-1.275,1.029-1.911c0.473-0.868,0.953-1.733,1.446-2.595
     c0.336-0.589,0.675-1.177,1.021-1.761c0.563-0.953,1.143-1.901,1.73-2.845c0.299-0.482,0.593-0.966,0.899-1.446
     c0.906-1.419,1.832-2.83,2.793-4.226c0.206-0.3,0.431-0.617,0.658-0.937h191.365c0.228,0.321,0.454,0.639,0.66,0.94v-0.001
     c0.96,1.396,1.886,2.807,2.792,4.226c0.307,0.482,0.602,0.97,0.903,1.454c0.584,0.941,1.161,1.884,1.722,2.834
     c0.348,0.59,0.69,1.184,1.03,1.779c0.488,0.853,0.963,1.71,1.431,2.57c0.35,0.645,0.703,1.29,1.043,1.938
     c0.427,0.815,0.837,1.636,1.248,2.456c0.342,0.686,0.694,1.368,1.024,2.057c0.36,0.751,0.697,1.509,1.043,2.264
     c0.71,1.552,1.392,3.112,2.043,4.681c0.21,0.504,0.424,1.006,0.626,1.511c0.402,1.002,0.783,2.009,1.161,3.019
     c0.17,0.455,0.34,0.91,0.505,1.367c0.386,1.069,0.761,2.141,1.12,3.217c0.113,0.338,0.221,0.678,0.332,1.016
     c2.184,6.721,3.845,13.58,4.956,20.533c0.01,0.066,0.021,0.133,0.031,0.198c0.451,2.85,0.811,5.714,1.078,8.591
     C371.591,277.471,366.708,277.18,361.819,277.18z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M318.223,59.922c-0.153-0.745-0.373-1.478-0.664-2.176c-0.291-0.7-0.653-1.375-1.071-2.014
     c-0.419-0.629-0.908-1.234-1.444-1.769c-0.535-0.536-1.129-1.026-1.769-1.444c-0.629-0.419-1.304-0.78-2.014-1.071
     c-0.698-0.291-1.431-0.512-2.177-0.664c-1.502-0.303-3.05-0.303-4.552,0c-0.733,0.151-1.467,0.373-2.177,0.664
     c-0.699,0.291-1.374,0.652-2.002,1.071c-0.64,0.418-1.234,0.908-1.769,1.444c-0.548,0.535-1.024,1.14-1.455,1.769
     c-0.419,0.64-0.78,1.315-1.071,2.014c-0.291,0.698-0.512,1.431-0.664,2.176c-0.151,0.757-0.221,1.515-0.221,2.27
     c0,0.768,0.071,1.526,0.221,2.282c0.151,0.745,0.372,1.478,0.664,2.177c0.291,0.7,0.652,1.375,1.071,2.002
     c0.431,0.641,0.907,1.235,1.455,1.781c0.536,0.536,1.129,1.013,1.769,1.444c0.629,0.419,1.304,0.78,2.002,1.071
     c0.71,0.291,1.443,0.512,2.177,0.664c0.757,0.151,1.526,0.22,2.282,0.22c0.757,0,1.526-0.07,2.27-0.22
     c0.746-0.151,1.48-0.372,2.177-0.664c0.71-0.291,1.385-0.652,2.014-1.071c0.64-0.431,1.234-0.908,1.769-1.444
     c0.536-0.547,1.024-1.14,1.444-1.781c0.418-0.628,0.78-1.303,1.071-2.002c0.291-0.698,0.511-1.431,0.664-2.177
     c0.151-0.755,0.232-1.513,0.232-2.282C318.454,61.437,318.374,60.679,318.223,59.922z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M478.473,111.128h-31.998V98.616c0-4.298-2.369-8.247-6.161-10.27c-3.793-2.024-8.391-1.794-11.962,0.601l-68.171,45.689
     c-3.226,2.161-5.161,5.788-5.161,9.671c0,3.882,1.935,7.509,5.161,9.671l68.171,45.689c1.953,1.31,4.213,1.971,6.482,1.971
     c1.878,0,3.761-0.455,5.48-1.371c3.792-2.023,6.161-5.972,6.161-10.27v-12.512h31.998c6.428,0,11.641-5.213,11.641-11.641v-43.071
     C490.115,116.341,484.902,111.128,478.473,111.128z M434.834,154.199c-6.428,0-11.641,5.213-11.641,11.641v2.338l-35.619-23.873
     l35.619-23.873v2.338c0,6.428,5.213,11.641,11.641,11.641h31.998v19.788H434.834z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M151.817,134.635l-68.17-45.689c-3.57-2.395-8.171-2.624-11.962-0.601c-3.793,2.023-6.161,5.972-6.161,10.27v12.512
     H33.526c-6.43,0-11.641,5.213-11.641,11.641v43.071c0,6.428,5.212,11.641,11.641,11.641h31.998v12.512
     c0,4.298,2.369,8.247,6.161,10.27c1.718,0.917,3.601,1.371,5.48,1.371c2.268,0,4.529-0.661,6.482-1.971l68.171-45.689
     c3.225-2.161,5.161-5.787,5.161-9.669C156.978,140.423,155.042,136.797,151.817,134.635z M88.806,168.178v-2.338
     c0-6.428-5.212-11.641-11.641-11.641H45.167v-19.788h31.998c6.43,0,11.641-5.213,11.641-11.641v-2.338l35.619,23.873
     L88.806,168.178z"
        />
      </g>
    </g>
  </svg>`,
})
export class LiposuctionIconComponent {
  @Input() fill = 'currentColor';
  @Input() width = '16px';
  @Input() height = '16px';
}
