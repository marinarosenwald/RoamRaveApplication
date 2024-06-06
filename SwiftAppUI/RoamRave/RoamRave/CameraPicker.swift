//
//  CameraPicker.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/28/24.
//

import SwiftUI

struct CameraPicker: View {
    @Binding var selectedImages: [UIImage]
    @Environment(\.presentationMode) var presentationMode

    var body: some View {
        ImagePicker(sourceType: .camera, selectedImages: $selectedImages, presentationMode: _presentationMode)
    }
}
