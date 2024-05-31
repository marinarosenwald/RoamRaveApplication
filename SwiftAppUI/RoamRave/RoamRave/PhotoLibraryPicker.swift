//
//  PhotoLibraryPicker.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 5/28/24.
//

import SwiftUI

struct PhotoLibraryPicker: View {
    @Binding var selectedImages: [UIImage]
        @Environment(\.presentationMode) var presentationMode

        var body: some View {
            ImagePicker(sourceType: .photoLibrary, selectedImages: $selectedImages, presentationMode: _presentationMode)
        }
}
