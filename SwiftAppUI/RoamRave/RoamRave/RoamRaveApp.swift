//
//  RoamRaveApp.swift
//  RoamRave
//
//  Created by Mari Rosenwald on 4/22/24.
//

import SwiftUI

@main
struct RoamRaveApp: App {
    @StateObject private var viewModel = ActivitiesViewModel()

       var body: some Scene {
           WindowGroup {
               Menu()
           }
       }
   }
